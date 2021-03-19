import { useReducer, useEffect, useRef } from "react";
import firebase from "./firebase";

const firestore = firebase.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

/**** USERS ****/

// Fetch user data (hook)
// This is called automatically by auth.js and merged into auth.user
export function useUser(uid) {
  return useQuery(uid && firestore.collection("users").doc(uid));
}

// Update an existing user
export function updateUser(uid, data) {
  return firestore.collection("users").doc(uid).update(data);
}

// Create a new user
export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

/**** ITEMS ****/
/* Example query functions (modify to your needs) */

// Fetch all items by owner (hook)
export function useItemsByOwner(owner) {
  return useQuery(
    owner &&
      firestore
        .collection("items")
        .where("owner", "==", owner)
        .orderBy("createdAt", "desc")
  );
}

// Fetch item data
export function useItem(id) {
  return useQuery(id && firestore.collection("items").doc(id));
}

// Update an item
export function updateItem(id, data) {
  return firestore.collection("items").doc(id).update(data);
}

// Create a new item
export function createItem(data) {
  return firestore.collection("items").add({
    ...data,
    createdAt: serverTimestamp(),
  });
}

// Delete an item
export function deleteItem(id) {
  return firestore.collection("items").doc(id).delete();
}


/**** PROJECTS ****/
/* Example query functions (modify to your needs) */

// Fetch all projects by owner (hook)
export function useProjectsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("projects").where("owner", "==", owner)
  );
}

// Fetch Project data
export function useProject(id) {
  return useQuery(id && firestore.collection("projects").doc(id));
}

// Update an Project
export function updateProject(id, data) {
  return firestore.collection("projects").doc(id).update(data);
}

// Create a new Project
export function createProject(data) {
  return firestore.collection("projects").add(data);
}

// Delete an Project
export function deleteProject(id) {
  return firestore.collection("projects").doc(id).delete();
}



//*** ADMIN DASHBOARD ***/
/**** ROLES ****/
/* Example query functions (modify to your needs) */

// Fetch all Roles by owner (hook)
export function useRolesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("roles").where("owner", "==", owner)
  );
}

// Fetch Role data
export function useRole(id) {
  return useQuery(id && firestore.collection("roles").doc(id));
}

// Update an Role
export function updateRole(id, data) {
  return firestore.collection("roles").doc(id).update(data);
}

// Create a new Role
export function createRole(data) {
  return firestore.collection("roles").add(data);
}

// Delete an Role
export function deleteRole(id) {
  return firestore.collection("roles").doc(id).delete();
}


/**** POSITION ****/
/* Example query functions (modify to your needs) */

// Fetch all Positions by owner (hook)
export function usePositionsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("positions").where("owner", "==", owner)
  );
}

// Fetch Position data
export function usePosition(id) {
  return useQuery(id && firestore.collection("positions").doc(id));
}

// Update an Position
export function updatePosition(id, data) {
  return firestore.collection("positions").doc(id).update(data);
}

// Create a new Position
export function createPosition(data) {
  return firestore.collection("positions").add(data);
}

// Delete an Position
export function deletePosition(id) {
  return firestore.collection("positions").doc(id).delete();
}

/**** DEPARTMENT ****/
/* Example query functions (modify to your needs) */

// Fetch all Departments by owner (hook)
export function useDepartmentsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("departments").where("owner", "==", owner)
  );
}

// Fetch Department data
export function useDepartment(id) {
  return useQuery(id && firestore.collection("departments").doc(id));
}

// Update an Department
export function updateDepartment(id, data) {
  return firestore.collection("departments").doc(id).update(data);
}

// Create a new Department
export function createDepartment(data) {
  return firestore.collection("departments").add(data);
}

// Delete an Department
export function deleteDepartment(id) {
  return firestore.collection("departments").doc(id).delete();
}

/**** PROJECT BIDDING ****/
/* Example query functions (modify to your needs) */

// Fetch all ProjectBiddings by owner (hook)
export function useProjectBiddingsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("projectBiddings").where("owner", "==", owner)
  );
}

// Fetch ProjectBidding data
export function useProjectBidding(id) {
  return useQuery(id && firestore.collection("projectBiddings").doc(id));
}

// Update an ProjectBidding
export function updateProjectBidding(id, data) {
  return firestore.collection("projectBiddings").doc(id).update(data);
}

// Create a new ProjectBidding
export function createProjectBidding(data) {
  return firestore.collection("projectBiddings").add(data);
}

// Delete an ProjectBidding
export function deleteProjectBidding(id) {
  return firestore.collection("projectBiddings").doc(id).delete();
}

/**** PORTAL MASTER ****/
/* Example query functions (modify to your needs) */

// Fetch all PortalMasters by owner (hook)
export function usePortalMastersByOwner(owner) {
  return useQuery(
    owner && firestore.collection("portalMasters").where("owner", "==", owner)
  );
}

// Fetch PortalMaster data
export function usePortalMaster(id) {
  return useQuery(id && firestore.collection("portalMasters").doc(id));
}

// Update an PortalMaster
export function updatePortalMaster(id, data) {
  return firestore.collection("portalMasters").doc(id).update(data);
}

// Create a new PortalMaster
export function createPortalMaster(data) {
  return firestore.collection("portalMasters").add(data);
}

// Delete an PortalMaster
export function deletePortalMaster(id) {
  return firestore.collection("portalMasters").doc(id).delete();
}

//*** EMPLOYEE DASHBOARD ***/
/**** INFO ****/
/* Example query functions (modify to your needs) */

// Fetch all Info by owner (hook)
export function useInfoByOwner(owner) {
  return useQuery(
    owner && firestore.collection("info").where("owner", "==", owner)
  );
}

// Fetch Info data
export function useInfo(id) {
  return useQuery(id && firestore.collection("info").doc(id));
}

// Update an Info
export function updateInfo(id, data) {
  return firestore.collection("info").doc(id).update(data);
}

// Create a new Info
export function createInfo(data) {
  return firestore.collection("info").add(data);
}

// Delete an Info
export function deleteInfo(id) {
  return firestore.collection("info").doc(id).delete();
}


/**** EDUCATION ****/
/* Example query functions (modify to your needs) */

// Fetch all Educations by owner (hook)
export function useEducationByOwner(owner) {
  return useQuery(
    owner && firestore.collection("education").where("owner", "==", owner)
  );
}

// Fetch Education data
export function useEducation(id) {
  return useQuery(id && firestore.collection("education").doc(id));
}

// Update an Education
export function updateEducation(id, data) {
  return firestore.collection("education").doc(id).update(data);
}

// Create a new Education
export function createEducation(data) {
  return firestore.collection("education").add(data);
}

// Delete an Education
export function deleteEducation(id) {
  return firestore.collection("education").doc(id).delete();
}

/**** DEPENDENT  ****/
/* Example query functions (modify to your needs) */

// Fetch all Dependents by owner (hook)
export function useDependentsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("dependents").where("owner", "==", owner)
  );
}

// Fetch Dependent data
export function useDependents(id) {
  return useQuery(id && firestore.collection("dependents").doc(id));
}

// Update an Dependent
export function updateDependent(id, data) {
  return firestore.collection("dependents").doc(id).update(data);
}

// Create a new Dependent
export function createDependent(data) {
  return firestore.collection("dependents").add(data);
}

// Delete an Dependent
export function deleteDependent(id) {
  return firestore.collection("dependents").doc(id).delete();
}

/**** EXPERIENCE ****/
/* Example query functions (modify to your needs) */

// Fetch all Experience by owner (hook)
export function useExperienceByOwner(owner) {
  return useQuery(
    owner && firestore.collection("experience").where("owner", "==", owner)
  );
}

// Fetch Experience data
export function useExperience(id) {
  return useQuery(id && firestore.collection("experience").doc(id));
}

// Update an Experience
export function updateExperience(id, data) {
  return firestore.collection("experience").doc(id).update(data);
}

// Create a new Experience
export function createExperience(data) {
  return firestore.collection("experience").add(data);
}

// Delete an Experience
export function deleteExperience(id) {
  return firestore.collection("experience").doc(id).delete();
}

/**** LEAVE APPLICATION ****/
/* Example query functions (modify to your needs) */

// Fetch all LeaveApplications by owner (hook)
export function useLeaveApplicationsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("leaveApplications").where("owner", "==", owner)
  );
}

// Fetch LeaveApplication data
export function useLeaveApplications(id) {
  return useQuery(id && firestore.collection("leaveApplications").doc(id));
}

// Update an LeaveApplication
export function updateLeaveApplication(id, data) {
  return firestore.collection("leaveApplications").doc(id).update(data);
}

// Create a new LeaveApplication
export function createLeaveApplication(data) {
  return firestore.collection("leaveApplications").add(data);
}

// Delete an LeaveApplication
export function deleteLeaveApplication(id) {
  return firestore.collection("leaveApplications").doc(id).delete();
}



//*** HR DASHBOARD ***/
/**** USERS ****/
/* Example query functions (modify to your needs) */

// Fetch all Users by owner (hook)
export function useUsersByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-users").where("owner", "==", owner)
  );
}

// Fetch Users data
export function useUsers(id) {
  return useQuery(id && firestore.collection("global-users").doc(id));
}

// Update an Users
export function updateUsers(id, data) {
  return firestore.collection("global-users").doc(id).update(data);
}

// Create a new Users
export function createUsers(data) {
  return firestore.collection("global-users").add(data);
}

// Delete an Users
export function deleteUsers(id) {
  return firestore.collection("global-users").doc(id).delete();
}

/**** SALARies ****/
/* Example query functions (modify to your needs) */

// Fetch all Salaries by owner (hook)
export function useSalariesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("salaries").where("owner", "==", owner)
  );
}

// Fetch Salaries data
export function useSalaries(id) {
  return useQuery(id && firestore.collection("salaries").doc(id));
}

// Update an Salaries
export function updateSalaries(id, data) {
  return firestore.collection("salaries").doc(id).update(data);
}

// Create a new Salaries
export function createSalaries(data) {
  return firestore.collection("salaries").add(data);
}

// Delete an Salaries
export function deleteSalaries(id) {
  return firestore.collection("salaries").doc(id).delete();
}

/**** LEAVE APPLICATIONS ****/
/* Example query functions (modify to your needs) */

// Fetch all LeaveApplications by owner (hook)
export function useAllLeaveApplicationsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-leave-applications").where("owner", "==", owner)
  );
}

// Fetch AllLeaveApplications data
export function useAllLeaveApplications(id) {
  return useQuery(id && firestore.collection("global-leave-applications").doc(id));
}

// Update an AllLeaveApplications
export function updateAllLeaveApplications(id, data) {
  return firestore.collection("global-leave-applications").doc(id).update(data);
}

// Create a new AllLeaveApplications
export function createAllLeaveApplications(data) {
  return firestore.collection("global-leave-applications").add(data);
}

// Delete an AllLeaveApplications
export function deleteAllLeaveApplications(id) {
  return firestore.collection("global-leave-applications").doc(id).delete();
}

/**** COMPANIES ****/
/* Example query functions (modify to your needs) */

// Fetch all Companies by owner (hook)
export function useCompaniesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("companies").where("owner", "==", owner)
  );
}

// Fetch Companies data
export function useCompanies(id) {
  return useQuery(id && firestore.collection("companies").doc(id));
}

// Update an Companies
export function updateCompanies(id, data) {
  return firestore.collection("companies").doc(id).update(data);
}

// Create a new Companies
export function createCompanies(data) {
  return firestore.collection("companies").add(data);
}

// Delete an Companies
export function deleteCompanies(id) {
  return firestore.collection("companies").doc(id).delete();
}

/**** ROLES ****/
/* Example query functions (modify to your needs) */

// Fetch all AllRoles by owner (hook)
export function useAllRolesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-roles").where("owner", "==", owner)
  );
}

// Fetch AllRoles data
export function useAllRoles(id) {
  return useQuery(id && firestore.collection("global-roles").doc(id));
}

// Update an AllRoles
export function updateAllRoles(id, data) {
  return firestore.collection("global-roles").doc(id).update(data);
}

// Create a new AllRoles
export function createAllRoles(data) {
  return firestore.collection("global-roles").add(data);
}

// Delete an AllRoles
export function deleteAllRoles(id) {
  return firestore.collection("global-roles").doc(id).delete();
}

/**** POSITIONS ****/
/* Example query functions (modify to your needs) */

// Fetch all AllPositions by owner (hook)
export function useAllPositionsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-positions").where("owner", "==", owner)
  );
}

// Fetch AllPositions data
export function useAllPositions(id) {
  return useQuery(id && firestore.collection("global-positions").doc(id));
}

// Update an AllPositions
export function updateAllPositions(id, data) {
  return firestore.collection("global-positions").doc(id).update(data);
}

// Create a new AllPositions
export function createAllPositions(data) {
  return firestore.collection("global-positions").add(data);
}

// Delete an AllPositions
export function deleteAllPositions(id) {
  return firestore.collection("global-positions").doc(id).delete();
}

/**** DEPARTMENTS ****/
/* Example query functions (modify to your needs) */

// Fetch all AllDepartments by owner (hook)
export function useAllDepartmentsByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-departments").where("owner", "==", owner)
  );
}

// Fetch AllDepartments data
export function useAllDepartments(id) {
  return useQuery(id && firestore.collection("global-departments").doc(id));
}

// Update an AllDepartments
export function updateAllDepartments(id, data) {
  return firestore.collection("global-departments").doc(id).update(data);
}

// Create a new AllDepartments
export function createAllDepartments(data) {
  return firestore.collection("global-departments").add(data);
}

// Delete an AllDepartments
export function deleteAllDepartments(id) {
  return firestore.collection("global-departments").doc(id).delete();
}

/**** COUNTRIES ****/
/* Example query functions (modify to your needs) */

// Fetch all Countries by owner (hook)
export function useCountriesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-countries").where("owner", "==", owner)
  );
}

// Fetch Countries data
export function useCountries(id) {
  return useQuery(id && firestore.collection("global-countries").doc(id));
}

// Update an Countries
export function updateCountries(id, data) {
  return firestore.collection("global-countries").doc(id).update(data);
}

// Create a new Countries
export function createCountries(data) {
  return firestore.collection("global-countries").add(data);
}

// Delete an Countries
export function deleteCountries(id) {
  return firestore.collection("global-countries").doc(id).delete();
}

/**** STATES ****/
/* Example query functions (modify to your needs) */

// Fetch all States by owner (hook)
export function useStatesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-states").where("owner", "==", owner)
  );
}

// Fetch States data
export function useStates(id) {
  return useQuery(id && firestore.collection("global-states").doc(id));
}

// Update an States
export function updateStates(id, data) {
  return firestore.collection("global-states").doc(id).update(data);
}

// Create a new States
export function createStates(data) {
  return firestore.collection("global-states").add(data);
}

// Delete an States
export function deleteStates(id) {
  return firestore.collection("global-states").doc(id).delete();
}

/**** CITIES ****/
/* Example query functions (modify to your needs) */

// Fetch all Cities by owner (hook)
export function useCitiesByOwner(owner) {
  return useQuery(
    owner && firestore.collection("global-cities").where("owner", "==", owner)
  );
}

// Fetch Cities data
export function useCities(id) {
  return useQuery(id && firestore.collection("global-cities").doc(id));
}

// Update an Cities
export function updateCities(id, data) {
  return firestore.collection("global-cities").doc(id).update(data);
}

// Create a new Cities
export function createCities(data) {
  return firestore.collection("global-cities").add(data);
}

// Delete an Cities
export function deleteCities(id) {
  return firestore.collection("global-cities").doc(id).delete();
}


/**** HELPERS ****/

// Reducer for useQuery hook state and actions
const reducer = (state, action) => {
  switch (action.type) {
    case "idle":
      return { status: "idle", data: undefined, error: undefined };
    case "loading":
      return { status: "loading", data: undefined, error: undefined };
    case "success":
      return { status: "success", data: action.payload, error: undefined };
    case "error":
      return { status: "error", data: undefined, error: action.payload };
    default:
      throw new Error("invalid action");
  }
};

// Custom React hook that subscribes to a Firestore query
function useQuery(query) {
  // Our initial state
  // Start with an "idle" status if query is falsy, as that means hook consumer is
  // waiting on required data before creating the query object.
  // Example: useQuery(uid && firestore.collection("profiles").doc(uid))
  const initialState = {
    status: query ? "loading" : "idle",
    data: undefined,
    error: undefined,
  };

  // Setup our state and actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Gives us previous query object if query is the same, ensuring
  // we don't trigger useEffect on every render due to query technically
  // being a new object reference on every render.
  const queryCached = useMemoCompare(query, (prevQuery) => {
    // Use built-in Firestore isEqual method to determine if "equal"
    return prevQuery && query && query.isEqual(prevQuery);
  });

  useEffect(() => {
    // Return early if query is falsy and reset to "idle" status in case
    // we're coming from "success" or "error" status due to query change.
    if (!queryCached) {
      dispatch({ type: "idle" });
      return;
    }

    dispatch({ type: "loading" });

    // Subscribe to query with onSnapshot
    // Will unsubscribe on cleanup since this returns an unsubscribe function
    return queryCached.onSnapshot(
      (response) => {
        // Get data for collection or doc
        const data = response.docs
          ? getCollectionData(response)
          : getDocData(response);

        dispatch({ type: "success", payload: data });
      },
      (error) => {
        dispatch({ type: "error", payload: error });
      }
    );
  }, [queryCached]); // Only run effect if queryCached changes

  return state;
}

// Get doc data and merge doc.id
function getDocData(doc) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : null;
}

// Get array of doc data from collection
function getCollectionData(collection) {
  return collection.docs.map(getDocData);
}

// Used by useQuery to store Firestore query object reference
function useMemoCompare(next, compare) {
  // Ref for storing previous value
  const previousRef = useRef();
  const previous = previousRef.current;

  // Pass previous and next value to compare function
  // to determine whether to consider them equal.
  const isEqual = compare(previous, next);

  // If not equal update previousRef to next value.
  // We only update if not equal so that this hook continues to return
  // the same old value if compare keeps returning true.
  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });

  // Finally, if equal then return the previous value
  return isEqual ? previous : next;
}
