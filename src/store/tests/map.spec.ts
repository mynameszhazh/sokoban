
import { it, expect, describe } from 'vitest'
import { useMapStore } from '..'

describe('map', () => {
  it('should', () => {
    setTimeout(() => {
      const { map } = useMapStore()
      expect(map).toBe('1')
    }, 1000);
  })
})