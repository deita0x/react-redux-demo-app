import expect from 'expect';
import { getAuthorsFormatted } from './manageCoursePageSelectors';

describe('Manage course page Selectors', () => {
  describe('getAuthorsFormatted', () => {
    it('should return data formatted', () => {
      const authors = [
        { id: 'test-id', firstName: 'TestName', lastName: 'LastName' }
      ];
      const expectedAuthors = [
        { value: 'test-id', text: 'TestName LastName' }
      ];

      expect(getAuthorsFormatted(authors)).toEqual(expectedAuthors);
    });
  });
});