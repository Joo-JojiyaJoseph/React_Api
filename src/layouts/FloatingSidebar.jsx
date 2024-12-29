import React from 'react'
import "./FloatingSidebar.css";
const FloatingSidebar = () => {
  return (
    <div className="floating-sidebar">
    {/* WhatsApp Link */}
    <a
        href="https://wa.me/971505071276"
        target="_blank"
        rel="noopener noreferrer"
        className="sidebar-item whatsapp"
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
        />
    </a>

    {/* Email Link */}
    <a
        href="mailto:info@capricornuae.com"
        className="sidebar-item email"
    >
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
            alt="Email"
        />
    </a>
</div>
  )
}

export default FloatingSidebar