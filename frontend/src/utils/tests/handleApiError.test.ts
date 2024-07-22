import { ApiError } from "@/types/error";
import { toast } from "react-toastify";
import { handleApiError } from "../handleApiErrors";

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("handleApiError", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should not call toast.error if error is handled", () => {
    const error: ApiError = {
      handled: true,
      response: {
        data: {
          message: "Handled error",
        },
      },
    };

    handleApiError(error);

    expect(toast.error).not.toHaveBeenCalled();
  });

  it("should call toast.error with the error message from response", () => {
    const errorMessage = "An error occurred";
    const error: ApiError = {
      handled: false,
      response: {
        data: {
          message: errorMessage,
        },
      },
    };

    handleApiError(error);

    expect(toast.error).toHaveBeenCalledWith(errorMessage);
  });

  it("should call toast.error with default message if response message is undefined", () => {
    const error: ApiError = {
      handled: false,
      response: {},
    };

    handleApiError(error);

    expect(toast.error).toHaveBeenCalledWith("An unexpected error occurred");
  });

  it("should call toast.error with default message if response is undefined", () => {
    const error: ApiError = {
      handled: false,
    };

    handleApiError(error);

    expect(toast.error).toHaveBeenCalledWith("An unexpected error occurred");
  });
});
