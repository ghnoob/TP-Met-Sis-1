/**
 * Data needed to find a rate by id.
 */
export default class FindRateByIdCommand {
  private id: number;

  /**
   * Creates a command.
   * @param id Id of the rate.
   */
  constructor(id: number) {
    this.id = id;
  }

  /**
   * Gets the id property of the command.
   */
  getId(): number {
    return this.id;
  }
}
