export default interface HandlerInterface<T> {
  execute(command?: unknown): Promise<T>;
}
