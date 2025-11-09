export type SendReturnResult = { result: any }
export type SendReturn = any

// Add Send type to match the modern EIP-1193 pattern
export type Send = (request: { method: string; params?: Array<any> }) => Promise<SendReturnResult | SendReturn>
export type SendOld = ({ method }: { method: string }) => Promise<SendReturnResult | SendReturn>
