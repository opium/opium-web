import {
  Rectangle,
  computeHeight,
  computeRectangleList,
} from './LineLayout';

describe('Line layout', () => {
  it('compute line height for one single rectangle', () => {
    const rectangleList = [
      new Rectangle(1000, 1000),
    ];

    expect(computeHeight(rectangleList, 600)).toEqual(600);
  });

  it('compute height for one simple line', () => {
    const rectangleList = [
      new Rectangle(100, 200),
      new Rectangle(200, 200),
      new Rectangle(300, 100),
    ];

    expect(computeHeight(rectangleList, 450)).toEqual(100);

    const otherRectangleList = [
      new Rectangle(200, 500),
      new Rectangle(300, 750),
      new Rectangle(400, 1000),
    ];

    expect(computeHeight(otherRectangleList, 600)).toEqual(499); // weird comportment, should be 500 but 0.8 + 0.4 = 1.2000000000000002
  });

  it('compute height for one line', () => {
    const rectangleList = [
      new Rectangle(100, 200),
      new Rectangle(200, 200),
      new Rectangle(300, 100),
    ];

    expect(computeHeight(rectangleList, 1000)).toEqual(222);

    const otherRectangleList = [
      new Rectangle(200, 500),
      new Rectangle(300, 650),
      new Rectangle(400, 1000),
    ];

    expect(computeHeight(otherRectangleList, 1100)).toEqual(871);
  });

  it('compute height with gutter', () => {
    const rectangleList = [
      new Rectangle(100, 200),
      new Rectangle(200, 200),
      new Rectangle(300, 100),
    ];

    expect(computeHeight(rectangleList, 600, 0)).toEqual(133);

    const gutterRectangleList = [
      new Rectangle(100, 200),
      new Rectangle(200, 200),
      new Rectangle(300, 100),
    ];

    expect(computeHeight(gutterRectangleList, 600, 100)).toEqual(88);
  });

  it('compute rectangle list', () => {
    const rectangleList = [
      new Rectangle(1000, 2000),
      new Rectangle(2000, 2000),
      new Rectangle(3000, 1000),
      new Rectangle(2500, 1000),
      new Rectangle(2500, 1000),
    ];

    let computedList = computeRectangleList(rectangleList, 600, 200);

    expect(computedList.length).toEqual(2);
    expect(computedList[0].length).toEqual(3);
    expect(computedList[1].length).toEqual(2);

    // first line
    let firstLineHeight = computedList[0][0].geometry.height;
    expect(firstLineHeight)
      .toEqual(computedList[0][1].geometry.height)
    ;
    expect(firstLineHeight)
      .toEqual(computedList[0][2].geometry.height)
    ;

    expect(computedList[1][0].geometry.height)
      .toEqual(computedList[1][1].geometry.height)
    ;

    const complexRectangleList = [
      new Rectangle(1000, 2000),
      new Rectangle(2000, 2000),
      new Rectangle(3000, 1000),
      new Rectangle(2500, 1000),
      new Rectangle(2500, 1000),
      new Rectangle(1000, 1000),
    ];

    computedList = computeRectangleList(complexRectangleList, 600, 200);

    expect(computedList.length).toEqual(3);
    expect(computedList[0].length).toEqual(3);
    expect(computedList[1].length).toEqual(2);
    expect(computedList[2].length).toEqual(1);

    // first line
    firstLineHeight = computedList[0][0].geometry.height;
    expect(firstLineHeight).toEqual(133);
    expect(firstLineHeight)
      .toEqual(computedList[0][1].geometry.height)
    ;
    expect(firstLineHeight)
      .toEqual(computedList[0][2].geometry.height)
    ;

    const secondLineHeight = computedList[1][0].geometry.height;
    expect(secondLineHeight).toEqual(120);
    expect(secondLineHeight)
      .toEqual(computedList[1][1].geometry.height)
    ;

    const thirdLineHeight = computedList[2][0].geometry.height;
    expect(thirdLineHeight).toEqual(200);
  });

  it('compute rectangle list with gutter', () => {
    const rectangleList = [
      new Rectangle(1000, 2000),
      new Rectangle(2000, 2000),
      new Rectangle(3000, 1000),
      new Rectangle(2500, 1000),
      new Rectangle(2500, 1000),
      new Rectangle(1000, 1000),
    ];

    const computedList = computeRectangleList(rectangleList, 600, 200, 10);

    expect(computedList.length).toEqual(3);
    expect(computedList[0].length).toEqual(3);
    expect(computedList[1].length).toEqual(2);
    expect(computedList[2].length).toEqual(1);

    // first line
    const firstLineHeight = computedList[0][0].geometry.height;
    expect(firstLineHeight).toEqual(128);
    expect(firstLineHeight)
      .toEqual(computedList[0][1].geometry.height)
    ;
    expect(firstLineHeight)
      .toEqual(computedList[0][2].geometry.height)
    ;

    const secondLineHeight = computedList[1][0].geometry.height;
    expect(secondLineHeight).toEqual(118);
    expect(secondLineHeight)
      .toEqual(computedList[1][1].geometry.height)
    ;

    const thirdLineHeight = computedList[2][0].geometry.height;
    expect(thirdLineHeight).toEqual(200);
  });

  it('compute real rectangle list test case', () => {
    const rectangleList = [
      new Rectangle(5923, 3729),
      new Rectangle(3072, 2304),
      new Rectangle(2593, 3872),
    ];

    const computedList = computeRectangleList(rectangleList, 600, 200, 10);

    expect(computedList.length).toEqual(1);
    expect(computedList[0][0].geometry.height).toEqual(161);
    expect(computedList[0][1].geometry.height).toEqual(161);
    expect(computedList[0][2].geometry.height).toEqual(161);
  });
});
