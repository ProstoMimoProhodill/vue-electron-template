import { AxiosResponse } from 'axios';
import { ResponseCodes } from './ResponseCodes';

function isOk(response: AxiosResponse): boolean {
  const { status } = response;
  return status === ResponseCodes.Ok || status === ResponseCodes.NoContent;
}

export interface IUnwrapAxiosResposeOptions<T = unknown> {
  ifError: (response: AxiosResponse<T>) => T;
  ifNoContent: (response: AxiosResponse<T>) => T;
}

export function unwrapAxiosRespose<T = unknown>(
  response: AxiosResponse<T>,
  options: Partial<IUnwrapAxiosResposeOptions<T>> = {},
): T {
  const defaultOptions: IUnwrapAxiosResposeOptions<T> = {
    ifNoContent() {
      throw new Error('Ошибка выполнения http запроса');
    },
    ifError() {
      throw new Error('Http запрос не вернул данных');
    },
  };
  const config: IUnwrapAxiosResposeOptions<T> = {
    ...defaultOptions,
    ...options,
  };
  if (isOk(response)) {
    if (response.status === ResponseCodes.NoContent) {
      return config.ifNoContent(response);
    } else {
      return response.data;
    }
  } else {
    return config.ifError(response);
  }
}
