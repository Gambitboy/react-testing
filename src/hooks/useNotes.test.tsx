import { renderHook, act } from '@testing-library/react-hooks';
import useNotes from './useNotes';

test('should add a note', () => {
  const { result } = renderHook(() => useNotes());

  act(() => {
    result.current.addNote('Note');
  });

  expect(result.current.notes).toHaveLength(1);
});

test('should not add a note', () => {
  const { result } = renderHook(() => useNotes());

  act(() => {
    result.current.addNote('');
  });

  expect(result.current.notes).toHaveLength(0);
});

test('should remove a note', () => {
  const { result } = renderHook(() => useNotes());

  act(() => {
    result.current.addNote('Note');
  });

  act(() => {
    result.current.removeNote(0);
  });

  expect(result.current.notes).toHaveLength(0);
});
