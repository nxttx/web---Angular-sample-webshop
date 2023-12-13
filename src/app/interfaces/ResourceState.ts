export enum LoadState {
  NOT_LOADED = 'not_loaded',
  LOADING = 'loading',
  LOADED = 'loaded',
  NOT_FOUND = 'not_found',
  ERROR = 'error'
}
export interface ResourceState<T>{
  object: T;
  state: LoadState;
}