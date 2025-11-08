import { useState } from "react";
import { Calendar, MapPin, Plus, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import InteractiveBackground from "@/components/InteractiveBackground";

interface Activity {
  id: string;
  name: string;
  time: string;
}

interface Destination {
  id: string;
  name: string;
  date: string;
  activities: Activity[];
}

const TripPlanner = () => {
  const { toast } = useToast();
  const [tripName, setTripName] = useState("");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [newDestName, setNewDestName] = useState("");
  const [newDestDate, setNewDestDate] = useState("");

  const addDestination = () => {
    if (!newDestName || !newDestDate) {
      toast({
        title: "Missing Information",
        description: "Please enter both destination name and date",
        variant: "destructive",
      });
      return;
    }

    const newDest: Destination = {
      id: Date.now().toString(),
      name: newDestName,
      date: newDestDate,
      activities: [],
    };

    setDestinations([...destinations, newDest]);
    setNewDestName("");
    setNewDestDate("");
    toast({
      title: "Destination Added!",
      description: `${newDestName} has been added to your trip`,
    });
  };

  const removeDestination = (id: string) => {
    setDestinations(destinations.filter((d) => d.id !== id));
    toast({
      title: "Destination Removed",
      description: "Destination has been removed from your trip",
    });
  };

  const addActivity = (destId: string, activityName: string, time: string) => {
    if (!activityName || !time) return;

    setDestinations(
      destinations.map((dest) =>
        dest.id === destId
          ? {
              ...dest,
              activities: [
                ...dest.activities,
                { id: Date.now().toString(), name: activityName, time },
              ],
            }
          : dest
      )
    );
  };

  const removeActivity = (destId: string, activityId: string) => {
    setDestinations(
      destinations.map((dest) =>
        dest.id === destId
          ? {
              ...dest,
              activities: dest.activities.filter((a) => a.id !== activityId),
            }
          : dest
      )
    );
  };

  const saveTripPlan = () => {
    if (!tripName) {
      toast({
        title: "Trip Name Required",
        description: "Please enter a name for your trip",
        variant: "destructive",
      });
      return;
    }

    // Save to localStorage for now
    const tripPlan = {
      name: tripName,
      destinations,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("tripPlan", JSON.stringify(tripPlan));

    toast({
      title: "Trip Saved!",
      description: "Your trip itinerary has been saved successfully",
    });
  };

  return (
    <div className="min-h-screen relative">
      <InteractiveBackground />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gradient">
              Trip Planner
            </h1>
            <p className="text-muted-foreground text-lg">
              Create your perfect Indian adventure
            </p>
          </div>

          {/* Trip Name */}
          <Card className="mb-6 shadow-card">
            <CardHeader>
              <CardTitle>Trip Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="tripName">Trip Name</Label>
                <Input
                  id="tripName"
                  placeholder="e.g., Golden Triangle Tour"
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Add Destination */}
          <Card className="mb-6 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Add Destination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="destName">Destination</Label>
                  <Input
                    id="destName"
                    placeholder="e.g., Delhi"
                    value={newDestName}
                    onChange={(e) => setNewDestName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destDate">Date</Label>
                  <Input
                    id="destDate"
                    type="date"
                    value={newDestDate}
                    onChange={(e) => setNewDestDate(e.target.value)}
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={addDestination} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Destination
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Destinations List */}
          <div className="space-y-4 mb-6">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onRemove={removeDestination}
                onAddActivity={addActivity}
                onRemoveActivity={removeActivity}
              />
            ))}
          </div>

          {/* Save Button */}
          {destinations.length > 0 && (
            <div className="flex justify-center">
              <Button
                onClick={saveTripPlan}
                size="lg"
                className="gradient-hero text-white"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Trip Plan
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface DestinationCardProps {
  destination: Destination;
  onRemove: (id: string) => void;
  onAddActivity: (destId: string, name: string, time: string) => void;
  onRemoveActivity: (destId: string, activityId: string) => void;
}

const DestinationCard = ({
  destination,
  onRemove,
  onAddActivity,
  onRemoveActivity,
}: DestinationCardProps) => {
  const [activityName, setActivityName] = useState("");
  const [activityTime, setActivityTime] = useState("");

  const handleAddActivity = () => {
    if (activityName && activityTime) {
      onAddActivity(destination.id, activityName, activityTime);
      setActivityName("");
      setActivityTime("");
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {destination.name}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(destination.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(destination.id)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Activities List */}
        {destination.activities.length > 0 && (
          <div className="mb-4 space-y-2">
            {destination.activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-3 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-medium">{activity.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemoveActivity(destination.id, activity.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Add Activity Form */}
        <div className="grid md:grid-cols-3 gap-3 pt-3 border-t">
          <Input
            placeholder="Activity name"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
          <Input
            type="time"
            value={activityTime}
            onChange={(e) => setActivityTime(e.target.value)}
          />
          <Button onClick={handleAddActivity} variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TripPlanner;
