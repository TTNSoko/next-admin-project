import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UserCreateDialog(props) {
  const { open, onClose, addUser, data } = props;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {data?.map((item) => (
        <DialogContent key={item.id} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create user</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={() => onClose(false)}
              variant="outline"
              type="button"
            >
              Cancel
            </Button>
            <Button onClick={() => addUser(item.id)} type="submit">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      ))}
    </Dialog>
  );
};
