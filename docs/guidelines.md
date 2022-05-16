React is very unopinionated about how things should be structured. This is exactly why it’s our responsibility to keep our projects clean and maintainable.

## Application Structure

```
├── 📂modules
| ├── 📂common
| | ├── 📂components
| | | ├── 📂button
| | |   ├── 📜index.js // export component
| | |   ├── 📜Button.jsx // component
| | |   ├── 📜Button.styles.jsx // styles CSS in JS
| | |   ├── 📜Button.test.jsx // tests
| ├── 📂dashboard
| | ├── 📂components
| | | ├── 📂table
| | |   ├── 📜index.js
| | |   ├── 📜Table.jsx
| | | ├── 📂sidebar
| | |   ├── 📜index.js
| | |   ├── 📜Sidebar.jsx
| ├── 📂details
| | ├── 📂components
| | | ├── 📂form
| | |   ├── 📜index.js
| | |   ├── 📜Form.jsx
```

## Naming

- Extensions: Use .jsx extension for React components.
- Filename: Use PascalCase for filenames. E.g., ReservationCard.jsx.
- Reference Naming: Use PascalCase for React components and camelCase for their instances.

```
// 😢bad
import reservationCard from './ReservationCard';

// 🔥good
import ReservationCard from './ReservationCard';

// 😢bad
const ReservationItem = <ReservationCard />;

// 🔥good
const reservationItem = <ReservationCard />;
```

- Component Naming: Use the filename as the component name. For example, ReservationCard.jsx should have a reference name of ReservationCard.
- Props Naming: Avoid using DOM component prop names for different purposes.

```
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// 🔥good
<MyComponent variant="fancy" />
```

- Function Naming: Use PascalCase e.g. toggleVisiblity()

## Ordering

- Ordering for class extends React.Component:

1. optional static methods
2. constructor
3. getChildContext
4. componentWillMount
5. componentDidMount
6. componentWillReceiveProps
7. shouldComponentUpdate
8. componentWillUpdate
9. componentDidUpdate
10. componentWillUnmount
11. event handlers starting with 'handle' like handleSubmit() or handleChangeDescription()
12. event handlers starting with 'on' like onClickSubmit() or onChangeDescription()
13. getter methods for render like getSelectReason() or getFooterContent()
14. optional render methods like renderNavigation() or renderProfilePicture()
15. render

- How to define propTypes, defaultProps, contextTypes, etc.

```
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```

## Use Absolute Paths

```
import Input from '@modules/common/components/Input'
```

## Write Comments in JSX

```
function Component(props) {
  return (
    <>
      {/* If the user is subscribed we don't want to show them any ads */}
      {user.subscribed ? null : <SubscriptionPlans />}
    </>
  )
}
```
