/**
 * Handles the logic of a request.
 */
export default interface HandlerInterface<T> {
  /**
   * Handles the request.
   * @param command Data needed to handle the request.
   * @returns Request result.
   */
  execute(command?: unknown): Promise<T>;
}
