import { addNumbers } from "./foo.ts";
import { assertEquals } from "@std/assert/mod.ts";

Deno.test("addNumbers works", () => {
  assertEquals(addNumbers(1, 2), 3);
});
