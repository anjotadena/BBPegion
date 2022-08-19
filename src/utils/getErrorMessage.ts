type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

const toErrorMessage = (error: unknown) => {
  if (isErrorWithMessage(error)) {
    return error;
  }

  try {
    return new Error(JSON.stringify(error));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    return new Error(String(error));
  }
};

const getErrorMessage = (error: unknown): string =>
  toErrorMessage(error).message;

export default getErrorMessage;
