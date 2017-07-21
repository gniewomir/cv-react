import React from 'react';
import bem from '../../../util/bem';
import List from '../../List';
import Item from '../../List/Item';
import Link from '../../Link';

const Filter = ({ query, suggestions, placeholder, callback }) => {
    const b = bem('Filter');
    return (
        <List horizontal centered>
            <Item>
                <span className={[b('Link'), b('FLabel')].join(' ')}>
                    Filter:
                </span>
            </Item>
            {suggestions.map(({ label, value }, index) => {
                return (
                    <Item key={index}>
                        <Link
                            undecorated
                            uppercase
                            disabled={query === value}
                            href={`/search/${value}`}
                            title={`Search for "${label}" related skills.`}
                            onClick={e => {
                                e.preventDefault();
                                callback(value);
                            }}
                        >
                            <span className={b('Link')}>
                                {label}
                            </span>
                        </Link>
                    </Item>
                );
            })}
            <Item>
                <span className={[b('Link'), b('SLabel')].join(' ')}>
                    Search:
                </span>
            </Item>
            <Item>
                <input
                    className={b('Search')('Input')}
                    value={query}
                    placeholder="...................................."
                    onChange={event => {
                        callback(event.target.value);
                    }}
                    onFocus={event => {
                        event.target.value = '';
                    }}
                />
            </Item>
        </List>
    );
};

export default Filter;
