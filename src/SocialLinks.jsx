import {
  FaTelegramPlane,
  FaViber,
  FaEnvelope,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function SocialLinks() {
  const contacts = [
    {
      name: "Telegram",
      icon: <FaTelegramPlane />,
      url: "tg://resolve?domain=HayMiKyaw",
    },
    {
      name: "Viber",
      icon: <FaViber />,
      url: "viber://chat?number=%2B959988787621",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      value: "haymikyaw8@gmail.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/haymikyaw8-prog",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      value: "09988787621",
    },
    {
      name: "Location",
      icon: <FaMapMarkerAlt />,
      url: "https://www.google.com/maps/search/?api=1&query=Madaya%2C%20Mandalay%2C%20Myanmar",
    },
  ];

  return (
    <div className="social-container">
      {contacts.map((contact) => (
        <div
          key={contact.name}
          className="social-card"
        >
          <span className="social-icon">
            {contact.icon}
          </span>

          <span className="social-name">
            {contact.name}
          </span>

          {contact.value && (
            <span className="social-value">
              {contact.value}
            </span>
          )}

          {contact.url && (
            <a
              className="social-link"
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {contact.name}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default SocialLinks;