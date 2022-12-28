import { render } from '@testing-library/react';
import { IconNames } from './icons';
import { Icon } from './index';

describe('renders all icon', () => {
    it('should render icons without failing', () => {
        const AllIcons = Object.values(IconNames)
        render(
            <div>
                {AllIcons.map((iconName, index) => (
                    <Icon name={iconName} key={`icon-${index}`} />
                ))}
            </div>
        );
    })
});
