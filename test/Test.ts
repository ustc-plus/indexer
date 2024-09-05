import assert from "assert";
import { 
  TestHelpers,
  LpManager_EndMinting
} from "generated";
const { MockDb, LpManager } = TestHelpers;

describe("LpManager contract EndMinting event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for LpManager contract EndMinting event
  const event = LpManager.EndMinting.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("LpManager_EndMinting is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await LpManager.EndMinting.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualLpManagerEndMinting = mockDbUpdated.entities.LpManager_EndMinting.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedLpManagerEndMinting: LpManager_EndMinting = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      creator: event.params.creator,
      depositIdIsTokenId: event.params.depositIdIsTokenId,
      _ustcPlusAmount: event.params._ustcPlusAmount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualLpManagerEndMinting, expectedLpManagerEndMinting, "Actual LpManagerEndMinting should be the same as the expectedLpManagerEndMinting");
  });
});
