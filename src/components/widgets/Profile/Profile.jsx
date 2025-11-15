import { motion } from "framer-motion";
import { User } from "lucide-react";
import { personalInfo } from "../../../constants/data";
import { useState, useEffect } from "react";

const Profile = ({ itemsVariants }) => {
  const [profileImage, setProfileImage] = useState(null);
  const githubUsername = "bondanbanuaji"; // Your GitHub username

  // Typing effect for role
  const roles = [
    "Software Engineer",
    "Frontend Developer",
    "React Specialist"
  ]; // You can customize these roles
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150); // Speed when typing
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      if (isDeleting) {
        // When deleting, remove characters
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Fast deletion speed
      } else {
        // When typing, add characters
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Slower typing speed
      }

      // Check if text is fully typed
      if (!isDeleting && currentText === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        // If fully deleted, move to next role
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, roles, typingSpeed]);

  useEffect(() => {
    // Fetch GitHub user data to get the avatar URL
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const userData = await response.json();
        setProfileImage(userData.avatar_url);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        // Fallback to a default image if GitHub API call fails
        setProfileImage("https://github.com/identicons/bondanbanuaji.png");
      }
    };

    fetchGithubData();
  }, []);

  return (
    <motion.div
      variants={itemsVariants}
      className="card card-cyan md:col-span-1 row-span-3 flex flex-col gap-5 p-5 h-full overflow-y-auto"
    >
      {/* Profile Header */}
      <div className="flex flex-col items-center gap-5 mb-3">
        {profileImage ? (
          <div className="relative">
            <img
              src={profileImage}
              className="w-20 h-20 rounded-full object-cover border-4 border-violet-500/30"
              alt="Profile"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop if fallback also fails
                e.target.src = "https://github.com/identicons/bondanbanuaji.png"; // Secondary fallback
              }}
            />
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-cyan-400">
              <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
            </div>
          </div>
        ) : (
          // Show loading state while fetching the image
          <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse flex items-center justify-center border-4 border-violet-500/30">
            <User className="text-gray-500" size={45} />
          </div>
        )}

        <div className="text-center">
          <h2 className="text-xl font-bold text-white">{personalInfo.name}</h2>
          <p className="text-violet-300 text-sm">
            {currentText}
            <span className="animate-blink"></span>
          </p>
        </div>
        
        {/* Bio/About Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-slate-300 text-sm leading-relaxed mb-3 text-center max-w-xs mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Hobbies Section - Static Display */}
        <div className="flex flex-wrap justify-center gap-2">
          {personalInfo.hobbies.map((hobby, index) => (
            <span
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-1.5 text-xs whitespace-nowrap transition-all duration-300 hover:bg-violet-600/50 hover:border-violet-500/50 cursor-pointer"
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Profile;