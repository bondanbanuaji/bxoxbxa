import { motion } from "framer-motion";
import { User } from "lucide-react";
import { personalInfo } from "../../../constants/data";
import { useState, useEffect } from "react";

const Profile = ({ itemsVariants }) => {
  const [profileImage, setProfileImage] = useState(null);
  const githubUsername = "bondanbanuaji"; // Your GitHub username

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
      className="card card-cyan md:col-span-1 row-span-3 flex flex-col justify-center gap-3"
    >
      {profileImage ? (
        <img
          src={profileImage}
          className="w-[70px] h-[70px] rounded-full object-cover"
          alt="Profile"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop if fallback also fails
            e.target.src = "https://github.com/identicons/bondanbanuaji.png"; // Secondary fallback
          }}
        />
      ) : (
        // Show loading state while fetching the image
        <div className="w-[70px] h-[70px] rounded-full bg-gray-200 animate-pulse flex items-center justify-center">
          <User className="text-gray-500" size={30} />
        </div>
      )}
      <h2 className="section-title">
        <User
          size={22}
          className="text-violet-400"
        />
        <p>{personalInfo.name}</p>
      </h2>
      <p className="text-slate-300 text-sm leading-relaxed">
        {personalInfo.bio}
      </p>
    </motion.div>
  );
};

export default Profile;