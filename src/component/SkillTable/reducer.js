import * as action from './actions.js';

export const filter = (skills, query) => {
    const filtered = [];
    if (!query || query.length < 3) {
        return skills;
    } else {
        query = query.toLowerCase();
    }
    skills.forEach(skill => {
        if (skill.title && skill.title.toLowerCase().search(query) !== -1) {
            filtered.push(skill);
            return;
        }
        if (
            skill.tags &&
            skill.tags.join('').toLowerCase().search(query) !== -1
        ) {
            filtered.push(skill);
            return;
        }
        if (
            skill.description &&
            skill.description.toLowerCase().search(query) !== -1
        ) {
            filtered.push(skill);
            return;
        }
        for (const lvl in skill.level) {
            if (lvl.enabled && lvl.label.toLowerCase().search(query) !== -1) {
                filtered.push(skill);
                return;
            }
        }
    });
    return filtered;
};

export const sort = skills => {
    var byLevel = [...skills];
    byLevel.sort((a, b) => {
        var x = 0;
        var y = 0;
        a.level.forEach((lvl, index) => {
            if (lvl.enabled) {
                x = x + index;
            }
        });
        b.level.forEach((lvl, index) => {
            if (lvl.enabled) {
                y = y + index;
            }
        });
        if (a.tags.indexOf('important') !== -1) {
            x++;
        }
        if (b.tags.indexOf('important') !== -1) {
            y++;
        }
        if (a.tags.indexOf('deprecated') !== -1) {
            x--;
        }
        if (b.tags.indexOf('deprecated') !== -1) {
            y--;
        }
        return y - x;
    });
    return byLevel;
};

export default (state, newAction) => {
    if (state === undefined) {
        return {
            skills: [],
            isLoading: false,
            query: 'important'
        };
    }
    switch (newAction.type) {
        case action.SKILL_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case action.SKILL_RECEIVED:
            return {
                ...state,
                skills: sort(filter(newAction.payload, state.query)),
                isLoading: false
            };
        case action.SKILL_ERROR:
            return {
                ...state,
                isLoading: false
            };
        case action.SKILL_FILTER:
            return {
                ...state,
                query: newAction.query
            };
        default:
            return state;
    }
};
