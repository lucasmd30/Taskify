import CloseTaskButton from "./components/CloseTaskButton";
import NotificationButton from "./components/NotificationButton";
import NewTaskButton from "./components/NewTaskButton";
import ProfileButton from "./components/ProfileButton";
import ListOptionsButton from "./components/ListOptionsButton";

function App() {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="bg-amber-500 p-8 rounded-2xl shadow-lg flex gap-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Close Task Button
          </h1>
          <CloseTaskButton />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Notification Button
          </h1>
          <NotificationButton hasNotification={true} />
          <NotificationButton hasNotification={false} />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            New Task Button
          </h1>
          <NewTaskButton/>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Profile Button
          </h1>
          <ProfileButton/>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            ListOptions Button
          </h1>
          <ListOptionsButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
