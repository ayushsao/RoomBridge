const preferenceStyle = {
  backgroundColor: "#ff7a7a",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  color: "white",
 display: "inline-block",
  fontSize: "0.75rem",
};

const Preferences = ({preferences}) => (

  <div className="max-w-md flex flex-col border-3 border-dotted rounded-lg bg-white p-6 pb-10 text-gray-900">
    <p className="text-lg font-medium">Your Preferences</p>
    <div className="mt-4 flex flex-wrap gap-2">
     { preferences.map((preference, index) => <span key={index} style={preferenceStyle}>{preference}</span>)}
    </div>
  </div>
);

export default Preferences;
