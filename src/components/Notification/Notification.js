import PropTypes from 'prop-types';
import React from '../../../node_modules/react';

const Notification = ({ text }) => <span>{text}</span>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
