export type AsyncAction<DataType> =
  | { type: 'pending' }
  | { type: 'resolved'; data: DataType }
  | { type: 'rejected'; error: Error };

export type AsyncState<DataType> =
  | {
      status: 'idle' | 'pending';
      data?: DataType | null;
      error?: Error | null;
    }
  | {
      status: 'resolved';
      data: DataType;
      error: null;
    }
  | {
      status: 'rejected';
      data: null;
      error: Error;
    };

export interface UseAsyncReturn<DataType> {
  status: string;
  data?: DataType | null;
  error?: Error | null;
  run: (promise: Promise<DataType>) => void;
  isIdle: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  isLoadingOrIdle: boolean;
  isSuccess: boolean;
  isError: boolean;
}
