import create from 'zustand';

type OrderInfo = {
  id: number;
  pay_method: string;
  merchant_uid: string;
  buyer_email: string;
  buyer_name: string;
  buyer_tel: string;
  buyer_addr: string;
  paid_amount: number;
  pg_provider: string;
  status: string;
  success: boolean;
  imp_uid: string;
};

type Orders = {
  [orderId: number]: OrderInfo;
};

type PaymentInfoState = {
  orders: Orders;
  setOrderInfo: (orderId: number, newOrderInfo: Partial<OrderInfo>) => void;

};

const usePaymentInfoStore = create<PaymentInfoState>((set) => ({
    orders: {},
    setOrderInfo: (orderId, newOrderInfo) =>
      set((state) => ({
        orders: {
          ...state.orders,
          [orderId]: { ...state.orders[orderId], ...newOrderInfo },
        },
      })),

  }));
  

export default usePaymentInfoStore;