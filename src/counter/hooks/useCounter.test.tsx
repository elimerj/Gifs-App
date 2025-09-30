import { beforeEach, describe, expect, test } from 'vitest';
import { useCounter } from './useCounter';
import { act, renderHook } from '@testing-library/react';

describe('useCounter', () => {
  /*let result; //Ojo!! a esto
  beforeEach(() => {
    const { result: hookValue } = renderHook(() => useCounter());
    result = hookValue;
  });*/
  test('should initialize with default value of 10 ', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
  });

  test('should initialize with default value of 20 ', () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(20);
  });
  test('should increment counter when handleAdd is called ', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      //debe venir de @testing-library , cuidado
      result.current.handleAdd();
      /* fire events that update state */
    });
    /* assert on the output */

    expect(result.current.counter).toBe(11);
  });
  test('should decrease counter when handleASubtract is called ', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      //debe venir de @testing-library , cuidado
      result.current.handleSubtract();
      /* fire events that update state */
    });
    /* assert on the output */

    expect(result.current.counter).toBe(9);
  });
  test('should reset counter when handleReset is called ', () => {
    const { result } = renderHook(() => useCounter(10));

    act(() => {
      //debe venir de @testing-library , cuidado
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
      /* fire events that update state */
    });
    expect(result.current.counter).toBe(6);
    /* assert on the output */
    act(() => {
      result.current.handleReset();
    });
    expect(result.current.counter).toBe(10);
  });
});
