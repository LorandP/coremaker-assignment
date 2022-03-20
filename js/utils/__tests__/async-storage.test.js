/* eslint-env jest */
import AsyncStorageMock from "@react-native-async-storage/async-storage/jest/async-storage-mock";

import { saveValue } from "../async-storage";

const key = "test_key";
const payload = { a: "b" };

describe("test setValue function", () => {
  it("sets payload to storage", async () => {
    const res = await saveValue({ key, value: payload });
    expect(AsyncStorageMock.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(payload)
    );
    expect(res).toBe(true);
  });
});
