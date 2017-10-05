declare namespace CatchFilter {
  type ErrorHandler = [(error: any) => any];
  type ErrorHandler = [any, (error: any) => any];
  type ErrorHandler = [any, any, (error: any) => any];
  type ErrorHandler = [any, any, any, (error: any) => any];
}

declare function CatchFilter(...errorHandlers: CatchFilter.ErrorHandler[]): (error: any) => any;

export default CatchFilter;
