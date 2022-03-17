/**
 * Data needed to delete a rate.
 */
export default class DeleteRateCommand {
  private id: number;

  /**
   * Creates a command.
   * @param id Id of the rate.
   */
  constructor(id: number) {
    this.id = id;
  }

  /**
   * Gets the id attribute of the command.
   */
  public getId() {
    return this.id;
  }
}
