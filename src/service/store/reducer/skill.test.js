import SkillReducer from './skill';

test('reducer returns correct initial state', () => {
    expect(
        SkillReducer(undefined, {}))
    .toEqual({
        skills: [],
        isLoading: false
    });
});

test('reducer returns current state in case of unidentified action', () => {
    const current = [];
    expect(SkillReducer(current, {type: 'ACTION_THAT_DONT_EXIST'})).toBe(current);
});