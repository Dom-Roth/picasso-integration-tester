import { Keyring } from "@polkadot/api";

/**
 * 
**/
export class TxCouncilTests {

  /**
  * Tests governance functionalities
  **/
  static runTxCouncilTests() {
    describe('tx.council tests', function() {
      if (global.testSudoCommands === true) {
        it('Council.setMembers(newMembers, prime, oldCount) test', async () => {
          await TxCouncilTests.governanceSudoCouncilSetMembersTest(global.api, global.walletAlice);
        });
      }

      it('Submit proposal test', async () => {
        await TxCouncilTests.governanceCouncilSubmitProposalTest(global.api, global.walletAlice);
      });
    });
  }

  /**
   * First checks if walletKey is in council.members()
   * Then submits a new proposal to council.propose()
   * @param {ApiPromise} api Connected API Promise.
   * @param {Object} walletKey generated key through Keyring class
  **/
  private static async governanceSudoCouncilSetMembersTest(api, walletKey) {
    // ToDo (D.Roth): STUB
  }

  /**
   * First checks if walletKey is in council.members()
   * Then submits a new proposal to council.propose()
   * @param {ApiPromise} api Connected API Promise.
   * @param {Object} walletKey generated key through Keyring class
  **/
  private static async governanceCouncilSubmitProposalTest(api, walletKey) {
    const councilMembers = await api.query.council.members();
    const keyring = new Keyring();
    for (const councilMember of councilMembers) {
      if (keyring.encodeAddress(councilMember) == walletKey.address) {
        // ToDo (D. Roth): Implement propsal submission
        break;
      }
    }
  }
}