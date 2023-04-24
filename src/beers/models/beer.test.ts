import { ProtoBeer } from './beer';

describe('Given the ProtoBeer class', () => {
  describe('Then if the class is instance', () => {
    test('Then, the result should be instance of ProtoBeer class', () => {
      const mockClass = new ProtoBeer('algo', 'algo', 1, 1, 'algo', 'algo');

      expect(mockClass).toBeInstanceOf(ProtoBeer);
    });
  });
});
