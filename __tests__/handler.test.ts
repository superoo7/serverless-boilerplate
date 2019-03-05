import { hello } from "../handler";

describe("handler", () => {
  it("hello function", async () => {
    const event = "event";
    const expected = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event
      })
    };
    const actual = await hello(event, null, null);
    expect(actual).toEqual(expected);
  });
});
