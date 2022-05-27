import PropTypes, { func } from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span
        className="status"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
