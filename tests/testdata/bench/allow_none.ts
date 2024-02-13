import { unreachable } from "../../../tests/util/std/assert/mod.ts";

const permissions: Deno.PermissionName[] = [
  "read",
  "write",
  "net",
  "env",
  "run",
  "ffi",
  "hrtime",
];

for (const name of permissions) {
  Deno.bench({
    name,
    permissions: {
      [name]: true,
    },
    fn() {
      unreachable();
    },
  });
}
