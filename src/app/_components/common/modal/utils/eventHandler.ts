type ThisObj = {
  eventListeners: Record<string, ((...args: any[]) => void)[]>;
};

const eventHanlders = {
  on(eventName: string, handler: () => void) {
    const self = this as unknown as ThisObj;
    if (!self.eventListeners) return self;

    if (!self.eventListeners[eventName]) self.eventListeners[eventName] = [];
    self.eventListeners[eventName]?.push(handler);
  },

  off(eventName: string, handler?: () => void) {
    const self = this as unknown as ThisObj;
    if (!self.eventListeners) return self;

    if (!handler) {
      self.eventListeners[eventName] = [];
    } else {
      self.eventListeners[eventName] =
        self.eventListeners[eventName]?.filter((fn) => fn !== handler) ?? [];
    }
  },

  emit(eventName: string) {
    const self = this as unknown as ThisObj;
    if (!self.eventListeners || !self.eventListeners[eventName]) return self;

    self.eventListeners[eventName]?.forEach((fn) => fn());
  },
};

export default eventHanlders;
