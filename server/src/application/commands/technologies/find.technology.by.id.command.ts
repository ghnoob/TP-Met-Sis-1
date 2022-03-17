/**
 * Data needed to find a technology by its id.
 */
export default class FindTechnologyByIdCommand {
  private id: number;

  /**
   * Creates a command.
   * @param id Id of the technology.
   */
  constructor(id: number) {
    this.id = id;
  }

  /**
   * Gets the id property of the command.
   */
  public getId() {
    return this.id;
  }
}
