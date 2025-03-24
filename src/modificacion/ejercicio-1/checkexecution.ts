
/**
 * Function that checks if the execution of a program is correct or not
 * @param args - arguments of the execution
 * @returns true if the excution is correct, false if not
 */
export function chechExecution(args: string[]): boolean {
  if(args.length < 4) {
    return false;
  }
  return true;
}