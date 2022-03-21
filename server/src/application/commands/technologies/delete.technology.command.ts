/**
 * Data needed to delete a technology.
 */
export default class DeleteTechnologyCommand {
  private id: number;

  /**
   * Creates a command.
   * @param id Id of the technology.
   */
  constructor(id: number) {
    this.id = id;
  }

  /**
   * Gets id property of the command.
   */
  public getId() {
    return this.id;
  }
}
