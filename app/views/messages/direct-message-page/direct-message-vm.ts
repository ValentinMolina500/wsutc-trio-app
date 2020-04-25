import { Observable } from "tns-core-modules/data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

class ViewModel extends Observable {
  public messages: ObservableArray<any> = new ObservableArray([
    {
      message: "Maure scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
    {
      message: "Mauris scelerisque interdum massa, vel lobortis ipsum. Duis sed fermentum elit. Vestibulum interdum lacus vel tempus commodo. Fusce eget arcu mauris. Etiam in nulla quis magna lobortis volutpat eu eu dolor. Nullam vehicula eget ipsum id ornare. Ut sit amet enim turpis. Vivamus vitae turpis quam."
    },
  ])
  private currentMessage: string = "";

  constructor() {
    super();
  }

  public sendMessage() {
    console.log("woo")
    console.log(this.currentMessage);
  }
}

export default ViewModel;