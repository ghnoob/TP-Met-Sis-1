/**
 * Represents a database entity.
 */
export default interface EntityInterface {
  /**
   * Gets the id of the entity.
   */
  getId(): number | undefined;

  /**
   * Gets the creation date of the entity.
   */
  getCreationDate(): Date | undefined;

  /**
   * Gets the date when the entity was updated for the last time.
   */
  getUpdateDate(): Date | undefined;

  /**
   * Gets the deletion date of the entity.
   */
  getDeletionDate(): Date | undefined;
}
