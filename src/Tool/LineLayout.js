import { Record } from 'immutable';

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

function isRectangle(rectangle) {
  return rectangle instanceof Rectangle ||
    (rectangle.hasOwnProperty('width') && rectangle.hasOwnProperty('width')) ||
    (rectangle instanceof Record &&
      (rectangle.has('width') || rectangle.has('height'))
    )
  ;
}

function computeHeight(rectangleList, maxWidth, gutterWidth = 0) {
  const ratioSum = rectangleList.reduce(
    (prev, current, index, array) => {
      if (isRectangle(current) && current.height) {
        return prev + (current.width / current.height);
      } else {
        return prev + 1;
      }
    },
    0
  );

  const gutterTotal = gutterWidth * (rectangleList.length - 1);

  const height = (maxWidth - gutterTotal) / ratioSum;

  return parseInt(height, 10);
}

function computeLine(storage, line, height) {
  const outLine = [];

  line.forEach(item => {
    let width = height;
    if (isRectangle(item) && item.height) {
      width = item.width * height / item.height;
    }

    const geometry = new Rectangle(width, height);
    outLine.push({ item, geometry });
  });

  storage.push(outLine);

  return storage;
}

function computeRectangleList(rectangleList, maxWidth, maxHeight, gutterWidth = 0) {
  let storage = [];
  let line = [];

  rectangleList.forEach(rectangle => {
    line.push(rectangle);
    const height = computeHeight(line, maxWidth, gutterWidth);

    if (height <= maxHeight) {
      storage = computeLine(storage, line, height);

      line = [];
    }
  });

  if (line.length > 0) {
    storage = computeLine(storage, line, maxHeight);
  }

  return storage;
}

export {
  Rectangle,
  computeHeight,
  computeRectangleList,
};
