type HookResponse<T = void> = {
  status: 'success' | 'info' | 'warning' | 'error',
  data?: T
  message?: string
}

export default HookResponse
