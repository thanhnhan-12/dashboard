interface ICommonParams {
  per_page?: number;
  current_page?: number;
  isAsc?: boolean;
  sortCategory?: number | string;
  keyword?: string;
}

type TFilterParams<T = object> = ICommonParams & Partial<T>;
