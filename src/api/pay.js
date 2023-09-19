import request from '@/utils/request'
import Qs from 'qs'


/* 收银台银行列表
 *
 */ 
export function bankList (query) {
  return request({
    url: `api-order/pay/publicTransfer/bankList`,
    method: 'get',
    params: query
  })
}

// 收银台(订单信息)
export function getPublicTransferCashierDesk(data) {
  return request({
    url: '/api-order/pay/publicTransfer/getPublicTransferCashierDesk',
    method: 'post',
    data: Qs.stringify(data, {
      arrayFormat: 'indices',
      allowDots: true
    })
  })
}

// 收银台提交
export function submitPayment(data) {
  return request({
    url: 'api-order/pay/publicTransfer/submitPayment',
    method: 'post',
    data: Qs.stringify(data, {
      arrayFormat: 'indices',
      allowDots: true
    })
  })
}

// 查询支付结果
export function queryPayResult(data) {
  return request({
    url: 'api-order/pay/publicTransfer/queryPayResult',
    method: 'post',
    data: Qs.stringify(data, {
      arrayFormat: 'indices',
      allowDots: true
    })
  })
}