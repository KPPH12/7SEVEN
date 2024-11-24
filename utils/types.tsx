export type actionFunc = (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string }>;