import { test } from "@playwright/test";

test.describe("group test", () => {

test.beforeEach("beforeEachTest", async () => {
    console.log("Run Before Each Test");
})
test.afterEach("afterEachTest", async () => {
    console.log("Run After Each Test");
})
test.afterAll("afterAllTest", async () => {
    console.log("Run After All Tests");
})
test.beforeAll("beforeAllTest", async () => {
    console.log("Run Before All Tests");
})
test("NormalTest", async () => {
    console.log("Run Normal Test");
})
test("test2", async () => {
    test.slow()
    console.log("Run Test 2");
})
//test.only("test3", async () => {
    console.log("Run Test 2");
//})
test.fixme("test4", async () => {
    console.log("will be fixed in future");
})
test.skip("test5", async () => {
    console.log("avoid currently");
})
})
