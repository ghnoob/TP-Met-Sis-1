import { StatusCodes } from './statusCodes';

const statusCodeMap = new Map<string, number>([
  ['ApplicationError', StatusCodes.InternalServerError],
  ['RateAlreadyExistsError', StatusCodes.UnproccessableEntity],
  ['RateNotFoundError', StatusCodes.NotFound],
  ['RateTechnologyIdNotValidError', StatusCodes.BadRequest],
  ['TechnologyAlreadyExistsError', StatusCodes.UnproccessableEntity],
  ['TechnologyNotFoundError', StatusCodes.NotFound],
  ['TechnologyHasRatesError', StatusCodes.UnproccessableEntity],
  ['SyntaxError', StatusCodes.BadRequest],
  ['Error', StatusCodes.BadRequest], // validation error
]);

export default function statusCodeMapper(errorName: string): number {
  return statusCodeMap.get(errorName) ?? StatusCodes.InternalServerError;
}
